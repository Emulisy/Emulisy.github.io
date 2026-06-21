(() => {
  const initFriendSlider = () => {
    const list = document.querySelector('.flink-list')
    if (!list || list.dataset.sliderReady === 'true') return

    const items = [...list.querySelectorAll('.flink-list-item')]
    const previousButton = document.querySelector('.friend-slider-prev')
    const nextButton = document.querySelector('.friend-slider-next')
    const dotsContainer = document.querySelector('.friend-slider-dots')
    if (!items.length || !previousButton || !nextButton || !dotsContainer) return

    list.dataset.sliderReady = 'true'
    let currentIndex = 0
    let wheelLocked = false

    const dots = items.map((_, index) => {
      const dot = document.createElement('button')
      dot.type = 'button'
      dot.setAttribute('aria-label', `Show link ${index + 1}`)
      dot.addEventListener('click', () => {
        currentIndex = index
        render()
      })
      dotsContainer.appendChild(dot)
      return dot
    })

    const render = () => {
      const previousIndex = (currentIndex - 1 + items.length) % items.length
      const nextIndex = (currentIndex + 1) % items.length

      items.forEach((item, index) => {
        item.classList.toggle('is-active', index === currentIndex)
        item.classList.toggle('is-prev', index === previousIndex)
        item.classList.toggle('is-next', index === nextIndex)
        const link = item.querySelector('a')
        if (link) link.setAttribute('aria-current', index === currentIndex ? 'true' : 'false')
      })

      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === currentIndex))
    }

    const move = direction => {
      currentIndex = (currentIndex + direction + items.length) % items.length
      render()
    }

    previousButton.addEventListener('click', () => move(-1))
    nextButton.addEventListener('click', () => move(1))

    items.forEach((item, index) => {
      const link = item.querySelector('a')
      if (!link) return
      link.addEventListener('click', event => {
        if (index !== currentIndex) {
          event.preventDefault()
          currentIndex = index
          render()
        }
      })
      link.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowRight' ? 1 : -1)
          items[currentIndex].querySelector('a')?.focus()
        }
      })
    })

    list.addEventListener('wheel', event => {
      if (wheelLocked || Math.abs(event.deltaY) < 8) return
      event.preventDefault()
      wheelLocked = true
      move(event.deltaY > 0 ? 1 : -1)
      setTimeout(() => { wheelLocked = false }, 420)
    }, { passive: false })

    let pointerStart = 0
    list.addEventListener('pointerdown', event => { pointerStart = event.clientX })
    list.addEventListener('pointerup', event => {
      const distance = event.clientX - pointerStart
      if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1)
    })

    render()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFriendSlider, { once: true })
  } else {
    initFriendSlider()
  }
})()
