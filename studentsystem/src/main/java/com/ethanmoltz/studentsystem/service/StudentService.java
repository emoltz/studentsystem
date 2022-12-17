package com.ethanmoltz.studentsystem.service;

import com.ethanmoltz.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
