export default function Hero() {
  return (
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    
    <div class="carousel-item active slide-1">
      <div class="container h-100 d-flex align-items-center">
        <div class="text-container text-start w-50">
          <h2 class="display-4 fw-bold text-white">Генераторы кислорода</h2>
          <p class="lead text-white">Оборудование для адсорбционной генерации кислорода из воздуха.</p>
          <a href="#" class="btn btn-primary btn-lg">Сконфигурировать установку</a>
        </div>
      </div>
    </div>

    
    
    <div class="carousel-item slide-2">
      <div class="container h-100 d-flex align-items-center justify-content-end">
        <div class="text-container text-end w-50">
          <h2 class="display-4 fw-bold text-white">Генераторы азота</h2>
          <p class="lead text-white">Линейка газоразделительного оборудования для получения азота из воздуха методом короткоцикловой безнагревной адсорбции (КЦА/PSA)</p>
          <a href="#" class="btn btn-primary btn-lg">Сконфигурировать установку</a>
        </div>
      </div>
    </div>
  </div>

  
  
  <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>
  )
}