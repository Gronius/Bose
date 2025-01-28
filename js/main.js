// Показать кнопку, если прокрутка больше 300px
window.addEventListener('scroll', function () {
	const scrollToTopButton = document.getElementById('scrollToTop')
	if (window.scrollY > 300) {
		scrollToTopButton.style.display = 'block'
	} else {
		scrollToTopButton.style.display = 'none'
	}
})

// Подняться вверх при нажатии на кнопку
document.getElementById('scrollToTop').addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth', // Плавная прокрутка
	})
})

// Получаем элементы
const menu = document.getElementById('menu')
const openMenuButton = document.querySelector('.open-menu')
const closeMenuButton = document.querySelector('.close-menu')
const menuLinks = document.querySelectorAll('.menu-link')

// Функция для блокировки прокрутки
function toggleMenu(isOpen) {
	if (isOpen) {
		menu.classList.add('active') // Показываем меню
		document.body.classList.add('no-scroll') // Блокируем прокрутку
	} else {
		menu.classList.remove('active') // Скрываем меню
		document.body.classList.remove('no-scroll') // Включаем прокрутку
	}
}

// // Открытие меню
openMenuButton.addEventListener('click', () => toggleMenu(true))

// Закрытие меню
closeMenuButton.addEventListener('click', () => toggleMenu(false))

// Закрытие меню при клике на любой пункт
menuLinks.forEach(link => {
	link.addEventListener('click', () => toggleMenu(false))
})