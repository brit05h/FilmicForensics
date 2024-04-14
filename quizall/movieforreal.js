const movies = [
  {
    title: 'Hereditary',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg',
    actor: 3051,
    genre: 27,
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    actor: 10990,
    genre: 14,
  },
  {
    title: 'Seven',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSas5foxPDeDifIljrySpdDOGR7F548-0TWiS1Y1AY7Gw&s',
    actor: 287,
    genre: 80,
  },
  {
    title: 'Shutter Island',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    actor: 103,
    genre: 18,
  },
  {
    title: 'Her',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg',
    actor: 1245,
    genre: 10749
  },
  {
    title: 'Love and Other Drugs',
    imageUrl:'https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_FMjpg_UX1000_.jpg',
    actor: 131,
    genre: 10749
  },
  {
    title: 'Enemy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Enemy_poster.jpg',
    actor: 131,
    genre: 18
  },
  {
    title: 'The Guilty',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Guilty_%282021_film%29.jpg',
    actor: 131,
    genre: 80
  },
  {
    title: 'Split',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg',
    actor: 1397778,
    genre: 9648
  },
  {
    title: 'The Menu',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg',
    actor: 1397778,
    genre: 27
  },
  {
    title: 'The Super Mario Bros Movie',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg',
    actor: 1397778,
    genre: 10751
  },
  {
    title: 'Lucy',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_.jpg',
    actor: 192,
    genre: 14
  },
  {
    title: 'High Crimes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/High_Crimes_poster.JPG',
    actor: 192,
    genre: 80
  },
  {
    title: 'The Contract',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjEzNTIwMjg2OV5BMl5BanBnXkFtZTcwMzMxNzg0MQ@@._V1_.jpg',
    actor: 192,
    genre: 18
  },
  {
    title: 'Feast of love',
    imageUrl: 'https://m.media-amazon.com/images/I/51koqU-J+mL._AC_UF894,1000_QL80_.jpg',
    actor: 192,
    genre: 10479
  },
  {
    title: 'Olympus Has Fallen',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNTU0NmY4MWYtNzRlMS00MDkxLWJkODYtOTM3NGI2ZDc1NTJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    actor: 192,
    genre: 28
  },
  {
    title: 'The Ritual Killer',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/The_Ritual_Killer.jpg',
    actor: 192,
    genre: 53
  },
  {
    title: 'The Lego Movie',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg',
    actor: 192,
    genre: 10751
  },
  {
    title: 'Dreamcatcher',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk1MjQwMTQyMV5BMl5BanBnXkFtZTcwODcxMjEzMw@@._V1_.jpg',
    actor: 192,
    genre: 27
  },
  {
    title: 'Just Getting Started',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzk0NDdjNWEtMDVkMC00ODdiLTgyMmYtOWM0ZDRjOTU4MjJlXkEyXkFqcGdeQXVyNjM2MDMxMDk@._V1_FMjpg_UX1000_.jpg',
    actor: 192,
    genre: 35
  },
  {
    title: 'Poor Things',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Poor_Things_poster.jpg',
    actor: 103,
    genre: 14
  },
  {
    title: 'Avengers: Endgame',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    actor: 103,
    genre: 28
  },
  {
    title: 'Shutter Island',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    actor: 103,
    genre: 53
  },
  {
    title: 'Zodiac',
    imageUrl: 'https://m.media-amazon.com/images/I/91gYQOSys6L._AC_UF894,1000_QL80_.jpg',
    actor: 103,
    genre: 80
  },
  {
    title: 'Where Wild Things are',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzQ1NzAwODEwM15BMl5BanBnXkFtZTcwNTE4MjI4Mg@@._V1_FMjpg_UX1000_.jpg',
    actor: 103,
    genre: 10751
  },
  {
    title: 'Dark Waters',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjYxZTlkMjItYmYyMS00Yzk3LTljZGQtNDk2NmM2ZTJmODRiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
    actor: 103,
    genre: 53
  },
  {
    title: 'Little Women',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    actor: 10990,
    genre: 10749
  },
  {
    title: 'This is The End',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_FMjpg_UX1000_.jpg',
    actor: 10990,
    genre: 35
  },
  {
    title: "Bullet Train",
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    actor: 287,
    genre: 28
  },
  {
    title: 'Mr and Mrs. Smith',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_.jpg',
    actor: 287,
    genre: 10749
  },
  {
    title: 'Megamind',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg',
    actor: 287,
    genre: 10751
  },
  {
    title: 'World War Z',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    actor: 287,
    genre: 27
  },
  {
    title: 'Babylon',
    imageUrl: 'https://m.media-amazon.com/images/I/812MLRtIduL._AC_UF894,1000_QL80_.jpg',
    actor: 287,
    genre: 18
  },
  {
    title: 'Tree of Life',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_.jpg',
    actor: 287,
    genre: 14
  },
  {
    title: 'Troy',
    imageUrl: 'https://musicart.xboxlive.com/7/dce21100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    actor: 287,
    genre: 36
  },
  {
    title: 'The Equalizer',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/The_Equalizer_poster.jpg',
    actor: 5292,
    genre: 28
  },
  {
    title: 'Fences',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTg0Nzc1NjA0MV5BMl5BanBnXkFtZTgwNTcyNDQ0MDI@._V1_.jpg',
    actor: 5292,
    genre: 53
  },
  {
    title: 'Roman J. Israel, Esq',
    imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14373521_p_v8_ab.jpg',
    actor: 5292,
    genre: 80
  },
  {
    title: 'Malcom X',
    imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14384_p_v8_ac.jpg',
    actor: 5292,
    genre: 18
  },
  {
    title: 'The Preachers Wife',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWFiMGMzYmYtMGZjNy00ZWVkLTllMjAtMTQ2NmU1OWVhMjkxXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg',
    actor: 5292,
    genre: 10751
  },
  {
    title: 'Chasing Trane: The John Coltrane Documentary',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Chasing_Trane_-_The_John_Coltrane_Documentary_%282016%29_Film_Poster.jpg',
    actor: 5292,
    genre: 99
  },
  {
    title: 'Knives Out',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
    actor: 3051,
    genre: 80
  },
  {
    title: 'Mafia Mamma',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDg0YmQ0NDMtNzdmYi00OTA5LWFjZDEtMWQ5NTQ0NjM4YTRlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
    actor: 3051,
    genre: 28
  },
  {
    title: 'The Estate',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzdlYzEzZjEtYjU0MS00NTkyLWFiYmMtYzllNjE2ODE2OWZmXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_FMjpg_UX1000_.jpg',
    actor: 3051,
    genre: 18
  },
  {
    title: 'Nightmare Alley',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    actor: 3051,
    genre: 53
  },
  {
    title: 'Black Widow',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    actor: 1245,
    genre: 28
  },
  {
    title: 'Sing',
    imageUrl: 'https://images.moviesanywhere.com/817ffd33edb160c17d14a14002605c30/3d62cdca-e516-49f2-9390-97e99992a209.jpg',
    actor: 1245,
    genre: 10751
  },
  {
    title: 'Chef',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTQyNDQwMjYtZTY5YS00MGU2LWE5NzctMjM4Y2IyYjkwMjNkXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg',
    actor: 1245,
    genre: 18
  },
  {
    title: 'Under the Skin',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTU1MDEwMDg4Nl5BMl5BanBnXkFtZTgwOTk3NTcxMTE@._V1_.jpg',
    actor: 1245,
    genre: 878
  },
  {
    title: 'Dune Part One',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    actor: 505710,
    genre: 878
  },
  {
    title: 'Malcolm and Marie',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzgzYTY5NmMtOWI0ZS00YzlmLWI1M2YtOTc3M2NlMzQ1ZGQwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    actor: 505710,
    genre: 10749
  },
  {
    title: 'Smallfoot',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNTVkYTZlZWItZTc0ZS00MTIzLThlNjItNmNkNDA5YzIwZGZjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_.jpg',
    actor: 505710,
    genre: 10751
  },
  {
    title: 'Queen and Slim',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjIzYmJkZmEtM2RkZS00MDA4LTg4NjAtOGRkN2EwZmFmMWE4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
    actor: 206919,
    genre: 10749
  },
  {
    title: 'Nope',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjI4YWU5MWUtZTg4ZC00MmYzLWIyMjMtODhhOGQ4YTY5MmVkXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg',
    actor: 206919,
    genre: 878
  },
  {
    title: 'Get Out',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg',
    actor: 206919,
    genre: 27
  },
  {
    title: 'Kick Ass 2',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ4OTQxNzc0N15BMl5BanBnXkFtZTcwOTQxOTU5OQ@@._V1_.jpg',
    actor: 206919,
    genre: 35
  },
  {
    title: 'Sicario',
    imageUrl: 'https://m.media-amazon.com/images/I/91wJ9eJby7L._AC_UF1000,1000_QL80_.jpg',
    actor: 206919,
    genre: 80
  },
  {
    title: 'Monkey Man',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Monkey_Man_film.jpg',
    actor: 76788,
    genre: 28
  },
  {
    title: 'The Wonderful Story of Henry Sugar',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjJjYzkyNWMtZTM2My00YWQ3LWJiODktMzc5YjhlNGY1Mjg5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    actor: 76788,
    genre: 35
  },
  {
    title: 'The Green Knight',
    imageUrl: 'https://thecollectiveis.us/wp-content/uploads/2015/04/movieposter.jpg',
    actor: 76788,
    genre: 27
  },
];

export default movies;

