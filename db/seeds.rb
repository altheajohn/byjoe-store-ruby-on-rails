# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: Star Wars }, { name: Lord of the Rings }])
#   Character.create(name: Luke, movie: movies.first)

require "faker"

puts "Creating seeds..."``

puts "Creating categories..."

cat1 = Category.create(name: "Rings", description: "things around your fingers")
cat2 = Category.create(name: "Necklaces", description: "neck decorations")
cat3 = Category.create(name: "Bracelets", description: "decoration for your wrists, you beautiful women")
cat4 = Category.create(name: "Earrings", description: "these sit on those beautiful ears of yours")
cat5 = Category.create(name: "Full Sets", description: "Includes a necklace, a pair of earrings and a bracelet.")
# cat6 = Category.create(name: Bolo Tie, description: A classic texas style tie necklace)

puts "Creating reviews..."

Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))
Review.create(content: Faker::Coffee.notes, full_name: Faker::Name.name, email: Faker::Internet.email, rating: Faker::Number.within(range: 1..5), image: Faker::Placeholdit.image(size: '200x200'))

puts 'creating users'

User.create(username: "Thea", first_name: 'Al', last_name: 'Thea', email: 'email', password: 'password')

puts 'creating products'

product1 = Product.create(name: 'necklace 1', description: 'long necklace, gorgeous sway', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat2.id)

product2 = Product.create(name: 'necklace 2', description: 'short necklace, gorgeous sway', image: Faker::Placeholdit.image(size: '50x50'), size: 'child', category_id: cat2.id)

product3 = Product.create(name: 'bracelet 1', description: 'long and comfortable', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat3.id)

product4 = Product.create(name: 'bracelet 2', description: 'short and comfortable', image: Faker::Placeholdit.image(size: '50x50'), size: 'child', category_id: cat3.id)

product5 = Product.create(name: 'ring 1', description: 'nice ring', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat1.id)

product6 = Product.create(name: 'ring 2', description: 'nice kids ring', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat1.id)

product7 = Product.create(name: 'earring adult', description: 'great pair of adult earrings', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat4.id)

product8 = Product.create(name: 'earring kids', description: 'great pair of kids earrings', image: Faker::Placeholdit.image(size: '50x50'), size: 'child', category_id: cat4.id)

product9 = Product.create(name: 'great set of everything for an adult', description: 'great pair matching earrings with a bracelet and necklace for an adult', image: Faker::Placeholdit.image(size: '50x50'), size: 'adult', category_id: cat5.id)

product10 = Product.create(name: 'great set of everything for kids', description: 'great pair matching earrings with a bracelet and necklace for a kid', image: Faker::Placeholdit.image(size: '50x50'), size: 'child', category_id: cat5.id)

puts 'creating inventories...:)'

Inventory.create(quantity: 2, product_id: product1.id)
Inventory.create(quantity: 1, product_id: product2.id)
Inventory.create(quantity: 4, product_id: product3.id)
Inventory.create(quantity: 5, product_id: product4.id)
Inventory.create(quantity: 6, product_id: product5.id)
Inventory.create(quantity: 2, product_id: product6.id)
Inventory.create(quantity: 1, product_id: product7.id)
Inventory.create(quantity: 1, product_id: product8.id)
Inventory.create(quantity: 1, product_id: product9.id)
Inventory.create(quantity: 1, product_id: product10.id)

puts 'seeding order forms...'

OrderForm.create(first_name: 'Sam', last_name: 'Waters', email: 'Samuel.waters@gmail.com', phone: "9177961036", order_for: 'A full set', order_details: 'can i get a full set of the jewelers choice in blue! thanks')

