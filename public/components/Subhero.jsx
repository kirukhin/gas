export default function Subero() {
  return (
    <section>
      <br /><br />
      <h3 class="text-center">Варианты исполнения</h3>
      <br /><br />
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
          <div class="card h-100">
            <img src="/free-mount.jpg" class="card-img-top" alt="фото установки свободного размещения" />
            <div class="card-body">
              <h5 class="card-title">Свободного размещения</h5>
              <p class="card-text">Генераторы азота и кислорода для оптимального размещения в производственных помещениях.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/platform-mount.jpg" class="card-img-top" alt="фото установки на платформе" />
            <div class="card-body">
              <h5 class="card-title">На платформе</h5>
              <p class="card-text">Газоразделительное оборудование компактного размещения на единой платформе для удобства транспортировки.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/module-mount.jpg" class="card-img-top" alt="фото модульной установки" />
            <div class="card-body">
              <h5 class="card-title">Блочно-модульное</h5>
              <p class="card-text">Блочно-модульное исполнение газоразделительной установки в контейнере.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}