package com.ethanmoltz.studentsystem.repository;

import com.ethanmoltz.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class StudentRepository extends JpaRepository<Student, Integer> {

}

