try {
  var s = JSON.parse(localStorage.getItem('zk-settings') || '{}');
  var e = document.documentElement;
  var h = new Date().getHours();
  var o = localStorage.getItem('zk-hour');
  if (o !== null && o !== '') h = Number(o);
  var night = h >= 19 || h < 6;
  e.dataset.theme = s.theme === 'light' || s.theme === 'dark' ? s.theme : night ? 'dark' : 'light';
  if (s.reduceMotion) e.dataset.motion = 'reduce';
} catch (x) {}
