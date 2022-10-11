import Component from "@ember/component";

export default Component.extend({
  actions: {
    async submitForm(evt) {
      evt.preventDefault();

      this.onsubmit(evt, {
        id: this.get("id"),
        name: this.get("nameValue"),
        surname: this.get("surnameValue"),
        patronymic: this.get("patronymicValue"),
      });
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      nameValue: this.get("speaker.name"),
      surnameValue: this.get("speaker.surname"),
      patronymicValue: this.get("speaker.patronymic"),
      name: this.get("speaker.name"),
      surname: this.get("speaker.surname"),
      patronymic: this.get("speaker.patronymic"),
      id: this.get("speaker.id"),
    });
  },
});
