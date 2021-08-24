json.extract! teacher_to_student, :id, :teacher_id, :student_id, :created_at, :updated_at
json.teacher teacher_to_student.teacher
json.student teacher_to_student.student