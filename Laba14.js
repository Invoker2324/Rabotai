// Объект акустики, созданный с помощью литерала
const acoustics = {
    type: 'Домашний кинотеатр',
    amplifier: 'AB',
    maxPower: 120,
    bodyMaterial: 'Дерево',
    displayInfo() {
      console.log(`Тип: ${this.type}, Усилитель: ${this.amplifier}, Макс. мощность: ${this.maxPower} Вт, Материал корпуса: ${this.bodyMaterial}`);
    }
  };
// Функция-конструктор для акустики
function Acoustics(type, amplifier, maxPower, bodyMaterial) {
    this.type = type;
    this.amplifier = amplifier;
    this.maxPower = maxPower;
    this.bodyMaterial = bodyMaterial;
  }
  
  // Геттеры и сеттеры
  Object.defineProperty(Acoustics.prototype, 'type', {
    get: function() { return this._type; },
    set: function(value) { this._type = value; }
  });
  
  // Добавление свойства и метода в прототип
  Acoustics.prototype.releaseDate = 'неизвестно';
  Acoustics.prototype.displayInfo = function() {
    console.log(`Тип: ${this.type}, Усилитель: ${this.amplifier}, Макс. мощность: ${this.maxPower} Вт, Материал корпуса: ${this.bodyMaterial}, Дата выхода на рынок: ${this.releaseDate}`);
  };
// Класс акустики
class Acoustic {
    constructor(type, amplifier, maxPower, bodyMaterial) {
      this._type = type;
      this.amplifier = amplifier;
      this.maxPower = maxPower;
      this.bodyMaterial = bodyMaterial;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
  
    displayInfo() {
      console.log(`Тип: ${this.type}, Усилитель: ${this.amplifier}, Макс. мощность: ${this.maxPower} Вт, Материал корпуса: ${this.bodyMaterial}`);
    }
  }
// Класс акустики для рынка, наследник класса Acoustic
class MarketAcoustic extends Acoustic {
    constructor(type, amplifier, maxPower, bodyMaterial, releaseDate, cost) {
      super(type, amplifier, maxPower, bodyMaterial);
      this.releaseDate = releaseDate;
      this.cost = cost;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Дата выхода на рынок: ${this.releaseDate}, Стоимость: ${this.cost} руб.`);
    }
  }
// Массив объектов акустики для рынка
const marketAcoustics = [
    new MarketAcoustic('Домашний кинотеатр', 'AB', 120, 'Дерево', '2024-01-01', 30000),
    new MarketAcoustic('Портативная колонка', 'D', 30, 'Пластик', '2024-05-01', 4500),
    // Другие объекты...
  ];
  
  // Определение объектов с максимальной и минимальной стоимостью
  let maxCostAcoustic = marketAcoustics[0];
  let minCostAcoustic = marketAcoustics[0];
  
  marketAcoustics.forEach(acoustic => {
    if (acoustic.cost > maxCostAcoustic.cost) {
      maxCostAcoustic = acoustic;
    }
    if (acoustic.cost < minCostAcoustic.cost) {
      minCostAcoustic = acoustic;
    }
  });
  
  // Суммарная стоимость всех объектов
  const totalCost = marketAcoustics.reduce((sum, acoustic) => sum + acoustic.cost, 0);
  
  // Средняя стоимость объекта
  const averageCost = totalCost / marketAcoustics.length;
  
  // Количество объектов со стоимостью выше средней
  const aboveAverageCount = marketAcoustics.filter(acoustic => acoustic.cost > averageCost).length;
  
  console.log('Объект с максимальной стоимостью:');
  maxCostAcoustic.displayInfo();
  
  console.log('Объект с минимальной стоимостью:');
  minCostAcoustic.displayInfo();
  
  console.log(`Суммарная стоимость: ${totalCost} руб.`);
  console.log(`Средняя стоимость объекта: ${averageCost.toFixed(2)} руб.`);
  console.log(`Количество объектов с стоимостью выше средней: ${aboveAverageCount}`);