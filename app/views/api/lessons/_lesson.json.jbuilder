json.extract! lesson, :id, :when, :end_time, :language_id, :student_id, :teacher_id

json.startAsString lesson.when.to_s 
json.endAsString lesson.end_time.to_s