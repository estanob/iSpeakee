json.extract! user, :id, :username, :display_name
json.firstName user.first_name
json.lastName user.last_name
json.languagesLearning user.language_to_students
json.studiedLanguages user.studied_languages
json.posts user.posts
json.attendedLessons user.attended_lessons
json.taughtLessons user.taught_lessons
json.teachers user.outward_teacher_to_students
json.students user.inward_teacher_to_students 