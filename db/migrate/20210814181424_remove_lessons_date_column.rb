class RemoveLessonsDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :date
  end
end
