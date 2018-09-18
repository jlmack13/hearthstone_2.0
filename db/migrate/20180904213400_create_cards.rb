class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :class
      t.string :set
      t.string :rarity
      t.integer :mana_cost
      t.timestamps
    end
  end
end
