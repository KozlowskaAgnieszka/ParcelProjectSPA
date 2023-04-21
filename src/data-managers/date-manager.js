const key = 'dates';

export const dateManager = {
  addDate(startDate, endDate) {
    const startDateInsatce = startDate.dateInstance;
    const endDateInsatce = endDate.dateInstance;
    const totalDays =
      (endDate.dateInstance - startDate.dateInstance) / (1000 * 60 * 60 * 24);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const startDateString = startDateInsatce.toLocaleDateString(
      'en-EN',
      options
    );
    const endDateString = endDateInsatce.toLocaleDateString('en-EN', options);
    const dates = localStorage.getItem(key);
    let content;

    if (dates === null) {
      content = {
        startDate: startDateString,
        endDate: endDateString,
        totalDays: totalDays,
      };
    } else {
      content = JSON.parse(dates);
      content.startDate = startDateString;
      content.endDate = endDateString;
      content.totalDays = totalDays;
    }
    localStorage.setItem(key, JSON.stringify(content));
  },

  getDates() {
    const dates = localStorage.getItem(key);

    if (dates === null) {
      return [];
    } else {
      const content = JSON.parse(dates);
      const stay = {
        startDate: content.startDate,
        endDate: content.endDate,
      };
      const stayValues = Object.values(stay);
      return stayValues;
    }
  },
};
