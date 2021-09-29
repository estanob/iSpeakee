class CreateFeedbackComments < ActiveRecord::Migration[5.2]
  def change
    create_table :feedback_comments do |t|
      t.integer :teacher_id, null: false
      t.integer :student_id, null: false
      t.integer :lesson_id, null: false
      t.date :date_written, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :feedback_comments, [:teacher_id, :student_id, :lesson_id], unique: true, name: 'feedback_index'
  end
end
