# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_28_234515) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "feedback_comments", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.integer "student_id", null: false
    t.integer "lesson_id", null: false
    t.date "date_written", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id", "student_id", "lesson_id"], name: "feedback_index", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.bigint "follower_id", null: false
    t.integer "followee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "followee_id"], name: "index_follows_on_follower_id_and_followee_id", unique: true
  end

  create_table "language_to_students", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "language_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "level", null: false
    t.index ["language_id", "student_id"], name: "index_language_to_students_on_language_id_and_student_id", unique: true
  end

  create_table "languages", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_languages_on_name", unique: true
  end

  create_table "lessons", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "when"
    t.bigint "language_id", null: false
    t.datetime "end_time"
    t.index ["student_id", "teacher_id", "when", "language_id"], name: "lesson_index", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_posts_on_creator_id"
  end

  create_table "studied_languages", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "language_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id", "language_id"], name: "index_studied_languages_on_student_id_and_language_id", unique: true
  end

  create_table "teacher_profiles", force: :cascade do |t|
    t.integer "teacher_id", null: false
    t.text "about_me", null: false
    t.text "me_as_teacher", null: false
    t.text "lessons_teaching_style", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_teacher_profiles_on_teacher_id", unique: true
  end

  create_table "teacher_to_students", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id", "teacher_id"], name: "index_teacher_to_students_on_student_id_and_teacher_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name"
    t.string "display_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "posts", "users", column: "creator_id"
end
