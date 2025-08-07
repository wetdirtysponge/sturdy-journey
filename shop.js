import { useState } from 'react'; import { motion } from 'framer-motion'; import { ShoppingCart, Gamepad2 } from 'lucide-react'; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

const games = [ { id: 1, title: 'Cyber Drift', price: 1499, image: 'https://picsum.photos/id/1011/400/250', description: 'Футуристические гонки по неоновым мегаполисам с бешеной скоростью.' }, { id: 2, title: 'Sky Warriors', price: 999, image: 'https://picsum.photos/id/1015/400/250', description: 'Воздушные сражения с реалистичной физикой и потрясающими видами.' }, { id: 3, title: 'Dungeon Crawler', price: 1299, image: 'https://picsum.photos/id/1025/400/250', description: 'Исследуй тёмные подземелья, побеждай монстров и находи сокровища.' }, ];

export default function GameStore() { const [cart, setCart] = useState([]);

const addToCart = (game) => { setCart([...cart, game]); };

const removeFromCart = (id) => { setCart(cart.filter((item, index) => index !== id)); };

return ( <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4"> <header className="flex justify-between items-center mb-6"> <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl font-bold flex items-center gap-2" > <Gamepad2 /> Game Store </motion.h1> <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2 cursor-pointer" > <ShoppingCart /> {cart.length} </motion.div> </header>

<motion.div
    className="grid md:grid-cols-3 gap-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {games.map((game) => (
      <Card key={game.id} className="bg-gray-800 border-gray-700 rounded-2xl shadow-lg overflow-hidden">
        <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
        <CardContent className="p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold">{game.title}</h2>
          <p className="text-gray-400">{game.description}</p>
          <p className="text-gray-300 font-semibold">{game.price} ₽</p>
          <Button
            onClick={() => addToCart(game)}
            className="bg-blue-600 hover:bg-blue-700 transition"
          >
            Добавить в корзину
          </Button>
        </CardContent>
      </Card>
    ))}
  </motion.div>

  {cart.length > 0 && (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 border-t border-gray-700"
    >
      <h3 className="text-lg font-bold mb-2">Корзина</h3>
      <ul className="max-h-40 overflow-y-auto mb-2">
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-1">
            <span>{item.title} - {item.price} ₽</span>
            <Button size="sm" variant="destructive" onClick={() => removeFromCart(index)}>Удалить</Button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="font-bold">Итого: {cart.reduce((acc, game) => acc + game.price, 0)} ₽</span>
        <Button className="bg-green-600 hover:bg-green-700">Оформить заказ</Button>
      </div>
    </motion.div>
  )}

  <footer className="mt-10 text-center">
    <a
      href="https://t.me/notlyrisc"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      Моя страница в Telegram
    </a>
  </footer>
</div>

); }

