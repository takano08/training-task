<template>
<div class="entry-container">
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
  <div class="entry-form-top">
    <h1>エントリーフォーム</h1>
    <p>以下のフォームをご入力ください。入力いただいた内容を確認後、担当者よりご連絡いたします。</p>
    <!--{{ruleForm}}-->
  </div>
  <div class="entry-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <el-form-item label="採用種別" prop="occupation">
         <el-select v-bind:disabled="verified" v-model="ruleForm.occupation" placeholder="採用種別を選択してください。">
            <el-option label="コンサルタント" value="コンサルタント"></el-option>
            <el-option label="エンジニア" value="エンジニア"></el-option>
         </el-select>
      </el-form-item>
      <el-form-item label="氏名" prop="applicantName">
        <el-input v-bind:disabled="verified" v-model="ruleForm.applicantName"></el-input>
      </el-form-item>
      <el-form-item label="フリガナ" prop="applicantNameRuby">
        <el-input v-bind:disabled="verified" v-model="ruleForm.applicantNameRuby"></el-input>
      </el-form-item>
      <el-form-item label="生年月日" required>
          <el-form-item prop="birthDay">
            <el-date-picker v-bind:disabled="verified" type="date" placeholder="Pick a date" v-model="ruleForm.birthDay" format="yyyy/MM/dd"
                            value-format="yyyy-MM-dd"　style="width: 500px;"></el-date-picker>
          </el-form-item>
      </el-form-item>
      <el-form-item label="性別" prop="gender">
        <el-radio-group v-bind:disabled="verified" v-model="ruleForm.gender">
          <el-radio label="男性"></el-radio>
          <el-radio label="女性"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="メールアドレス" prop="eMail">
        <el-input v-bind:disabled="verified" v-model="ruleForm.eMail"></el-input>
      </el-form-item>
      <el-form-item label="電話番号" prop="phoneNumber">
        <el-input v-bind:disabled="verified" v-model="ruleForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="その他（質問など)" prop="inquiry">
        <el-input type="textarea" v-bind:disabled="verified" v-model="ruleForm.inquiry" style="width: 500px;"></el-input>
      </el-form-item>
      <el-form-item>
        <template v-if="!verified">
          <el-button type="primary" @click="verifiedForm()">内容確認</el-button>
        </template>
        <template v-if="verified">
          <el-button type="primary" @click="submitForm('ruleForm')">送信</el-button>
          <el-button type="primary" @click="verifiedForm()">戻る</el-button>
        </template>
          <el-button @click="resetForm('ruleForm')">リセット</el-button>
      </el-form-item>
    </el-form>
  </div>

</div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
      verified : false,
        ruleForm: {
          applicantId:null,
          occupation: '',
          applicantName: '',
          applicantNameRuby:'',
          birthDay: '',
          gender: '',
          eMail:'',
          phoneNumber:'',
          inquiry: ''
        },
        rules: {
          occupation: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          applicantName: [
            { required: true, message: '必須項目です。', trigger: 'blur' }
          ],
          applicantNameRuby: [
            { required: true, message: '必須項目です。', trigger: 'blur' }
          ],
         /* birthDay: [
            { type: 'date', required: true, message: '必須項目です。', trigger: 'change' }
          ],*/
          gender: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          eMail: [
            { required: true, message: '必須項目です。', trigger: 'blur' }
          ],
          phoneNumber: [
            { required: true, message: '必須項目です。', trigger: 'blur' }
          ],
          inquiry: [
            { required: false, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url = '/api/applicant'
            console.log(url);
            axios.post(url,this.ruleForm).then((response) => {
              this.resetForm(formName);
              alert('送信しました。');
              return true;
            }, (err) => {
              console.log(err)
              return false;
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      verifiedForm() {
         this.verified = !this.verified;
      }

    }



  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Noto+Sans+JP:wght@300&display=swap');



  .recruit-body h2 {
    border-bottom:solid 2px #eee;
  }

  .recruit-body th {
    border-bottom:solid 1px #eee;
  }

  .recruit-body td {
    text-align: left;
  }

  .el-input {
    width:500px;
    height:50px;
  }

  .entry-container {
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
  }

</style>

