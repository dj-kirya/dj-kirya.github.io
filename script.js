document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get('name');
  const contact = form.get('contact');
  const date = form.get('date');
  const details = form.get('details');

  const subject = encodeURIComponent(`Booking — DJ KIRYA — ${name}`);
  const body = encodeURIComponent(`Имя: ${name}\nКонтакт: ${contact}\nДата: ${date}\nДетали: ${details}`);
  window.location.href = `mailto:booking@djkirya.kz?subject=${subject}&body=${body}`;
});

