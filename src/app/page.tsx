import * as motion from "motion/react-client";
import {
  ShoppingCart,
  Calendar,
  Bell,
  Users,
  Sparkles,
  Check,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TELEGRAM_URL = "https://t.me/Homi_Family_Bot?start=landing"; // ← замени при необходимости

const heroImages = [
  // Локальные изображения из папки public
  "/1.jpg",
  "/2.jpg", 
  "/3.jpg",
  "/4.jpg",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HomiLanding() {
  const grids = heroImages.slice(0, 4);
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-gray-900">
      {/* Навбар */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-rose-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 grid place-items-center shadow-sm">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Homi Family Bot</span>
            <Badge className="ml-2 bg-rose-100 text-rose-700 hover:bg-rose-100">beta</Badge>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Badge variant="outline" className="border-rose-200 text-rose-700">Работает в Telegram</Badge>
            <Badge variant="outline" className="border-rose-200 text-rose-700">Старт за 10 секунд</Badge>
            <Button asChild className="rounded-2xl px-5">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                Попробовать в Telegram
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(1100px_600px_at_20%_0%,rgba(244,63,94,0.15),transparent_60%),radial-gradient(800px_500px_at_90%_20%,rgba(244,63,94,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Семейный органайзер в Telegram —
              <span className="block text-rose-600">без хаоса и «ты опять забыл?»</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              Homi помогает семье быть одной командой: общий список покупок, календарь,
              задачи и тёплые напоминания. Всё — в привычном Telegram.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base">
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                  Попробовать в Telegram
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="h-4 w-4 text-rose-500" /> Бесплатно на старте
                <Check className="h-4 w-4 text-rose-500" /> Без установки приложения
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 gap-3">
            {grids.map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img src={src} alt="Счастливая семья" className="h-48 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Кейсы: как Homi спасает день */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">Кейсы</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Как Homi спасает день</h2>
            <p className="mt-2 text-gray-600">Реальные сценарии, где семья перестаёт спорить и начинает синхронно действовать.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <ShoppingCart className="h-5 w-5 text-rose-600" /> Покупки без дублей
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Купили три молока, а хлеб забыли».</p>
                  <p><b>Как решает Homi:</b> общий список с защитой от дублей, голосовое добавление и режим «куплено» одним тапом.</p>
                  <p className="text-sm text-gray-500">Бонус: отчёт «что купили» — в один клик в семейный чат.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5 text-rose-600" /> Общий календарь семьи
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Я записал к врачу, а у тебя тренировок две!»</p>
                  <p><b>Как решает Homi:</b> единый календарь с участниками, напоминаниями и тёплым подтверждением «вижу, я приду».</p>
                  <p className="text-sm text-gray-500">Поддержка разных часовых поясов, если кто-то в поездке.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Bell className="h-5 w-5 text-rose-600" /> Утренний дайджест
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Каждый утро спрашиваем: что сегодня?»</p>
                  <p><b>Как решает Homi:</b> в выбранное время — список дел и событий на день. Коротко, по делу, без стресса.</p>
                  <p className="text-sm text-gray-500">Работает для каждого члена семьи персонально.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="h-5 w-5 text-rose-600" /> Делегирование и “мы — команда”
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Я всё тяну на себе».</p>
                  <p><b>Как решает Homi:</b> назначай задачи и роли — кто покупает, кто забирает, кто готовит. Прозрачно и по‑доброму.</p>
                  <p className="text-sm text-gray-500">Никаких «ты опять забыл» — только мягкие напоминания.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Shield className="h-5 w-5 text-rose-600" /> Забота о приватности
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Не хочу, чтобы наши данные гуляли по интернету».</p>
                  <p><b>Как решает Homi:</b> минимум данных, только по делу; экспорт — по запросу; прозрачные настройки.</p>
                  <p className="text-sm text-gray-500">Бот в Telegram, без отдельных установок и лишних прав.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Sparkles className="h-5 w-5 text-rose-600" /> Голос и магия ИИ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p><b>Ситуация:</b> «Руки заняты — не до списков».</p>
                  <p><b>Как решает Homi:</b> скажи голосом: «добавь продукты для борща» — остальное Homi распакует, разложит по категориям и уберёт дубли.</p>
                  <p className="text-sm text-gray-500">Умно и по‑добрососедски 😊</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                Попробовать в Telegram
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-rose-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">Просто как 1-2-3</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Как это работает</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              step: 1,
              title: "Открой бота",
              text: "Запускается в Telegram. Нажми /start — и Homi всё подскажет.",
            },{
              step: 2,
              title: "Добавь семью",
              text: "Пригласи партнёра и детей. Настройте роли и время напоминаний.",
            },{
              step: 3,
              title: "Живите синхронно",
              text: "Покупки, события, задачи и дайджест — без хаоса и стресса.",
            }].map((s) => (
              <motion.div key={s.step} {...fadeUp}>
                <Card className="rounded-3xl border-rose-100 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-baseline gap-3">
                      <span className="text-rose-600 font-black text-4xl">{s.step}</span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">{s.text}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                Попробовать в Telegram
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">Отзывы</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Семьи замечают разницу уже на первой неделе</h2>
            <p className="mt-2 text-gray-600">Реальные эмоции и маленькие победы — без микроменеджмента и упрёков.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Ирина и Андрей",
              role: "Санкт‑Петербург, двое детей",
              quote: "Теперь покупки под контролем: мы не берём одно и то же дважды и ничего не забываем. Удобно, когда список общий и всегда под рукой.",
              img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=800&auto=format&fit=crop",
            },{
              name: "Наташа",
              role: "мама‑предприниматель",
              quote: "Утренний дайджест — спасение. Я сразу вижу, кто за что отвечает, и день начинается спокойнее, без лишних напоминаний.",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
            },{
              name: "Алексей",
              role: "папа‑айтишник",
              quote: "Когда напоминает бот, это звучит мягко. Теперь я не \"ворчу\", а просто улыбаюсь, когда задача уже сделана.",
              img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop",
            }].map((t, i) => (
              <motion.div key={i} {...fadeUp}>
                <Card className="rounded-3xl border-rose-100 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Приватность */}
      <section className="py-14 sm:py-20 bg-rose-50/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Вопросы и ответы</h2>
          </motion.div>

          <Accordion type="single" collapsible className="rounded-3xl bg-white border border-rose-100 p-4 sm:p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Это бесплатно или платно?</AccordionTrigger>
              <AccordionContent>
                🔹 Есть бесплатный план — до 20 совместных задач и событий в месяц. Этого хватает, чтобы спокойно попробовать. Полный доступ к функциям — всего 299 ₽/мес, можно подключить всю семью.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Нужно скачивать отдельное приложение?</AccordionTrigger>
              <AccordionContent>
                🔹 Нет 🙂 Homi работает прямо в привычном Telegram. Ваш семейный органайзер всегда в одном удобном чате.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>А если муж или жена игнорируют?</AccordionTrigger>
              <AccordionContent>
                🔹 Предложите просто попробовать. Когда пишет бот, это не упрёк. Напоминание «от третьего лица» воспринимается мягко — и меньше поводов для ссор.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Безопасно ли хранить данные?</AccordionTrigger>
              <AccordionContent>
                🔹 Конечно. Все напоминания и списки остаются только внутри вашего закрытого семейного чата.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Можно пригласить бабушку или няню?</AccordionTrigger>
              <AccordionContent>
                🔹 Да, легко. Вы сами решаете, кого позвать и какие права дать.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Что будет, если забыть оплатить?</AccordionTrigger>
              <AccordionContent>
                🔹 Бот просто вернётся на бесплатный план. Данные сохранятся, и вы сможете продолжить, когда захотите.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>А если у нас большая семья?</AccordionTrigger>
              <AccordionContent>
                🔹 Подписка рассчитана на максимум 8 участников.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                Попробовать в Telegram
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 grid place-items-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span>Homi Family Bot</span>
            <span className="text-gray-400">— делаем из семьи команду</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Homi. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
