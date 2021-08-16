class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.bigint :student_id, null: false
      t.bigint :teacher_id, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.timestamps
    end
    add_index :lessons, [:student_id, :teacher_id, :date, :time], unique: true
  end
end
