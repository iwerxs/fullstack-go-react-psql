package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/lib/pq"
)

type Student struct {
    Name  string `json:"name"`
    Klass string `json:"klass"`
    Grade string `json:"grade"`
}

var db *sql.DB

func main() {
    connStr := "user=testusr password=testing dbname=testschdb host=localhost port=5432 sslmode=disable"
    var err error
    db, err = sql.Open("postgres", connStr)
    if err != nil {
        panic(err)
    }
    defer db.Close()

    fs := http.FileServer(http.Dir("./frontend/dist"))
    http.Handle("/", fs)

    http.HandleFunc("/api/insert", insertHandler)
    http.HandleFunc("/api/read", readHandler)
    http.HandleFunc("/api/update", updateHandler)
    http.HandleFunc("/api/delete", deleteHandler)

    fmt.Println("Server started at http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}

func insertHandler(w http.ResponseWriter, r *http.Request) {
    var student Student
    if err := json.NewDecoder(r.Body).Decode(&student); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    query := "INSERT INTO students (name, klass, grade) VALUES ($1, $2, $3)"
    if _, err := db.Exec(query, student.Name, student.Klass, student.Grade); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
}

func readHandler(w http.ResponseWriter, r *http.Request) {
    rows, err := db.Query("SELECT name, klass, grade FROM students")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var students []Student
    for rows.Next() {
        var student Student
        if err := rows.Scan(&student.Name, &student.Klass, &student.Grade); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        students = append(students, student)
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(students)
}

func updateHandler(w http.ResponseWriter, r *http.Request) {
    var student Student
    if err := json.NewDecoder(r.Body).Decode(&student); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    query := "UPDATE students SET klass=$2, grade=$3 WHERE name=$1"
    if _, err := db.Exec(query, student.Name, student.Klass, student.Grade); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}

func deleteHandler(w http.ResponseWriter, r *http.Request) {
    var student Student
    if err := json.NewDecoder(r.Body).Decode(&student); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    query := "DELETE FROM students WHERE name = $1"
    if _, err := db.Exec(query, student.Name); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}
