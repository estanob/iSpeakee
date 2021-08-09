@language_to_students.each do |language_to_student|
  json.set! language_to_student.id do
    json.partial! "language_to_student", language_to_student: language_to_student
  end
end