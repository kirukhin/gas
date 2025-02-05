import freeMount from "/free-mount.jpg";
import platformMount from "/platform-mount.jpg";
import moduleMount from "/module-mount.jpg";

export default function Subero() {
  return (
    <section>
      <br /><br />
      <h3 className="text-center">Варианты исполнения</h3>
      <br /><br />
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="card h-100">
            <img src={freeMount} className="card-img-top" alt="фото установки свободного размещения" />
            <div className="card-body">
              <h5 className="card-title">Свободного размещения</h5>
              <p className="card-text">Генераторы азота и кислорода для оптимального размещения в производственных помещениях.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={platformMount} className="card-img-top" alt="фото установки на платформе" />
            <div className="card-body">
              <h5 className="card-title">На платформе</h5>
              <p className="card-text">Газоразделительное оборудование компактного размещения на единой платформе для удобства транспортировки.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={moduleMount} className="card-img-top" alt="фото модульной установки" />
            <div className="card-body">
              <h5 className="card-title">Блочно-модульное</h5>
              <p className="card-text">Блочно-модульное исполнение газоразделительной установки в контейнере.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
