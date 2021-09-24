class CreateTeacherProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :teacher_profiles do |t|
      t.integer :teacher_id, null: false, references: [:users, :id]
      t.text :about_me, null: false
      t.text :me_as_teacher, null: false
      t.text :lessons_teaching_style, null: false
      t.timestamps
    end
    add_index :teacher_profiles, [:teacher_id], unique: true
  end
end
