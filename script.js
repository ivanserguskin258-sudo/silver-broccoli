document.addEventListener('DOMContentLoaded', function() {

  const tariffButtons = document.querySelectorAll('.choose-tariff');
  tariffButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tariffName = btn.getAttribute('data-tariff') || btn.innerText.trim();
      alert(`🎉 Спасибо за выбор тарифа "${tariffName}"! Наши менеджеры свяжутся с вами для активации доступа.`);
    });
  });

  const directionButtons = document.querySelectorAll('.choose-direction');
  const directionMsg = document.getElementById('direction-message');

  directionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentCard = btn.closest('.direction-card');
      const directionTitle = parentCard ? parentCard.getAttribute('data-direction') : '';
      if (directionTitle) {
        alert(`✨ Вы выбрали направление: ${directionTitle}. Готовьтесь к интенсиву!`);
        if (directionMsg) {
          directionMsg.innerHTML = `✅ Направление «${directionTitle}» выбрано! Скоро вы получите пробный урок.`;
          setTimeout(() => {
            if (directionMsg) directionMsg.innerHTML = '';
          }, 3000);
        }
      } else {
        alert('Направление выбрано! Подробности в личном кабинете.');
      }
    });
  });

  const directionCards = document.querySelectorAll('.direction-card');
  directionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList && e.target.classList.contains('choose-direction')) return;
      const direction = card.getAttribute('data-direction');
      if (direction) {
        alert(`🔍 Направление "${direction}" — отличный выбор! Чтобы записаться, выберите тариф.`);
      }
    });
  });
});
