export function Speciality() {
    const specialityData = [
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' },
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' },
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' },
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' },
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' },
      { title: 'Программирование', name: 'Разработчик', speciality: 'Разработчик' }
    ];
  
    return (
      <div>
        <h1 className="mt-2">Speciality</h1>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialityData.map((card, index) => (
                <div className="border p-6 text-center rounded-lg shadow-lg" key={index}>
                    <div className="text-xl font-semibold">{card.title}</div>
                    <div className="mt-2 text-lg">{card.name}</div>
                    <div className="mt-2 text-sm text-gray-600">{card.speciality}</div>
                    <button className="mt-4 px-6 py-2 bg-green w-full text-white rounded hover:bg-blue-600">
                        Поступить
                    </button>
                </div>
            ))}
        </div>
    </div>
    );
  }
  