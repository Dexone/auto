<template>
  <section class="section">
    <div class="inp"><input id="input" class="input is-success" type="text"
        placeholder="Название модели, например: Camry"></div>
    <button id="stat" class="button is-success is-focused">Информация</button>

    <div class="content">
      <table>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Величина</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Модель:</td>
            <td>
              <div id="model"></div>
            </td>
          </tr>
          <tr>
            <td>Год:</td>
            <td>
              <div id="year"></div>
            </td>
          </tr>
          <tr>
            <td>Привод:</td>
            <td>
              <div id="drive"></div>
            </td>
          </tr>
          <tr>
            <td>Трансмиссия:</td>
            <td>
              <div id="transmission"></div>
            </td>
          </tr>
          <tr>
            <td>Расход топлива:</td>
            <td>
              <div id="mpg"></div>
            </td>
          </tr>
          <tr>
            <td>Тип топлива:</td>
            <td>
              <div id="fuel"></div>
            </td>
          </tr>
          <tr>
            <td>Фото:</td>
            <td>
              <img id="picture" src="" width="300px">
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </section>
</template>

