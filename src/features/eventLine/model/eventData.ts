// src/features/event-line/model/eventData.ts
export interface EventData {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
}

export const events: EventData[] = [
  {
    startTime: "09:00",
    endTime: "10:00",
    title: "Регистрация и приветственный кофе",
    description: "Гости собираются, регистрируются и знакомятся друг с другом.",
  },
  {
    startTime: "10:00",
    endTime: "11:00",
    title: "Открытие праздника",
    description: "Организаторы приветствуют участников, рассказывают о программе, представляют ведущих и аниматоров.",
  },
  {
    startTime: "11:00",
    endTime: "12:00",
    title: "Конкурс костюмов",
    description: "Участники демонстрируют свои костюмы, судьи выбирают лучшие наряды.",
  },
  {
    startTime: "12:00",
    endTime: "13:00",
    title: "Обеденный перерыв",
    description: "Гости могут отдохнуть, пообщаться и насладиться тематическими угощениями.",
  },
  {
    startTime: "13:00",
    endTime: "18:00",
    title: "Мастер-классы и квесты",
    description: "Различные мастер-классы по созданию жутких аксессуаров, резьбе по тыкве и участие в квестах.",
  },
  {
    startTime: "18:00",
    endTime: "19:00",
    title: "Страшные истории у костра",
    description: "Гости рассказывают и слушают жуткие истории в таинственной атмосфере.",
  },
  {
    startTime: "19:00",
    endTime: "21:00",
    title: "Вечеринка с конкурсами и музыкой",
    description: "Танцы, конкурсы и веселая тематическая музыка для всех участников.",
  },
];
