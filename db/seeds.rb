# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all

@User = User.create!(username: "Johnathan", email:"testers@gmail.com", password: "8675309")

puts "#{User.count} users"

end

puts "#{Post.count} post made"

Post.create!(title:"MW3R", imgURL: "https://i1.wp.com/www.gameoverla.com/wp-content/uploads/2021/07/maxresdefault-2-2.jpg", content: "As a COD fan it pains me to say that we're not getting an MW3R")
Post.create!(title:"Playstation", imgURL: "https://cdn.wccftech.com/wp-content/uploads/2020/06/PlayStation-5-UI.jpg", content: "Sony is working on a new model for a playstation 5")
Post.create!(title:"GamesCon", imgURL: "https://cdn.mos.cms.futurecdn.net/T9SJhzPZyTSwFYWAg5HovL.jpg", content: "In case you missed it, GamesCon had a massive showcase of games Like COD:Vanguard")
Post.create!(title:"Ghost of Tsushima", imgURL: "https://cdn.earlygame.com/uploads/images/_headerImage/Ghost_of_tsushima_iki_island.jpg", content: "The DLC for Ghost of Tsushima has released and fans are hyped")
Post.create!(title:"COD:Vanguard", imgURL: "https://sm.ign.com/t/ign_in/screenshot/default/bf2042-1_t3np.1280.jpg", content: "EA released an alpha build test for Battlefield: 2042")

