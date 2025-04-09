export default function Hero() {
  return (
<div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    
    <div className="carousel-item active slide-1">
      <div className="container h-100 d-flex align-items-center">
        <div className="text-container text-start w-50">
          <h2 className="display-4 fw-bold text-white">Генераторы кислорода</h2>
          <p className="lead text-white">Оборудование для адсорбционной генерации кислорода из воздуха.</p>
          <a href="#" className="btn btn-primary btn-lg">Сконфигурировать установку</a>
        </div>
      </div>
    </div>

    
    
    <div className="carousel-item slide-2">
      <div className="container h-100 d-flex align-items-center justify-content-end">
        <div className="text-container text-end w-50">
          <h2 className="display-4 fw-bold text-white">Генераторы азота</h2>
          <p className="lead text-white">Линейка газоразделительного оборудования для получения азота из воздуха методом короткоцикловой безнагревной адсорбции (КЦА/PSA)</p>
          <a href="#" className="btn btn-primary btn-lg">Сконфигурировать установку</a>
        </div>
      </div>
    </div>
  </div>

  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Предыдущий</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Следующий</span>
  </button>
</div>
  )
}