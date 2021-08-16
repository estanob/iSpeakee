class RemoveTimeFromLessons < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :time
  end
end
