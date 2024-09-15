_moveToPopup(e) {
  // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
  if (!this.#map) return;

  const workoutEl = e.target.closest('.workout');

  if (!workoutEl) return;

  const workout = this.#workouts.find(
    work => work.id === workoutEl.dataset.id
  );

  this.#map.setView(workout.coords, this.#mapZoomLevel, {
    animate: true,
    pan: {
      duration: 1,
    },
  });

  // using the public interface
  // workout.click();
}