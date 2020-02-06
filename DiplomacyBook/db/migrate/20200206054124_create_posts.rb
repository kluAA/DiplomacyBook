class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :author_id, null: false

      t.index :user_id
      t.index :author_id
      t.timestamps
    end
  end
end
