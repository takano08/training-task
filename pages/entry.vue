<template>
<div class="entry-container">
  <div class="entry-top">
    <h1>採用情報</h1>
  </div>
  <div class="recruit-body">
    <h2>募集概要</h2>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table_about">
            <tbody>
            <tr>
              <th width="20%" scope="row">募集業務</th>
              <td>コンサルタント、研究員、エンジニア</td>
            </tr>
            <tr>
              <th scope="row">応募資格</th>
              <td>IT、コンサルティング、保険、証券等の業務に従事した経験のある方</td>
            </tr>
            <tr>
              <th scope="row">募集人数</th>
              <td>若干名</td>
            </tr>
            <tr>
              <th scope="row">募集締切</th>
              <td>随時</td>
            </tr>
            <tr>
              <th scope="row">雇用形態</th>
              <td>社員（1年契約の更新）　※複数年契約については相談に応じます</td>
            </tr>
            <tr>
              <th scope="row">設立日</th>
              <td>2018年7月2日</td>
            </tr>
            <tr>
              <th scope="row">給料</th>
              <td>月給20万円～　※専門能力・経験に応じて個別に決定</td>
            </tr>
            <tr>
              <th scope="row">勤務地</th>
              <td>東京オフィス（東京都中央区八重洲二丁目8番7号）</td>
            </tr>
            <tr>
              <th scope="row">勤務時間</th>
              <td>
              就業時間：8:45～17:45（原則）<br>
              休憩時間：1時間<br>
              時間外労働：あり
              </td>
            </tr>
            <tr>
              <th scope="row">休日・休暇</th>
              <td>完全週休2日制（土曜日、日曜日）、祝日、有給休暇、連続休暇、特別休暇（慶弔等）、育児休暇、介護休暇</td>
            </tr>
            <tr>
              <th scope="row">加入保険</th>
              <td>各種社会保険完備</td>
            </tr>
            </tbody>
    </table>
  </div>
  <div class="entry-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="氏名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="採用種別" prop="region">
        <el-select v-model="ruleForm.region" placeholder="採用種別">
          <el-option label="コンサルタント" value="shanghai"></el-option>
          <el-option label="エンジニア" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生年月日" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="性別" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男性"></el-radio>
          <el-radio label="女性"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="その他（質問など)" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .entry-top {
    background-image:url("https://d1f5hsy4d47upe.cloudfront.net/75/753641ca2aea0d4485e2472a0c04f3be_t.jpeg");
    height:200px;
    }


  .recruit-body h2 {
    border-bottom:solid 2px #333;
  }

  .recruit-body th {
    border-bottom:solid 1px #333;
  }

  .recruit-body td {
    text-align: left;
  }

</style>

