json.extract! user, :id, :username
json.firstName user.first_name
json.lastName user.last_name
json.languagesLearning user.languages_learning
json.studiedLanguages user.language_to_students
json.posts user.posts