class AddDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :string
    add_column :users, :position, :string
    add_column :users, :workplace, :string
    add_column :users, :relationship, :string
    add_column :users, :location, :string
  end
end
