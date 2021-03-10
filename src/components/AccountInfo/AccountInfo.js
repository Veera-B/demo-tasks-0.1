import React,{Component} from 'react'

import classes from './AccountInfo.module.css';

const updateObjects = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
class  AccountInfo extends Component {

    state = {
        accountData:{
            name:{
                value: '',
                valid: false,
                validation:{
                    required: true
                }
            },
            zipcode:{
                value: '',
                valid: false,
                validation:{
                    required: true
                }
            },
            accountNumber:{
                value: '',
                valid: false,
                validation:{
                    required: true
                }
            },
            date:{
                value: '',
                valid: false,
                validation:{
                    required: true
                }
            },
            client:{
                value: '',
                valid: false,
                validation:{
                    required: true
                }
            },
            checkbox:{
                checked: false,
                valid: false,
            },
            checkbox1:{
                checked: false,
                valid: false,
            }
        },
        isValidForm: false,
        disabled: true,
    }
    async handleCheckbox(e,id){
       
        const val = e.target.checked;
        //alert(val);
        const updatedFormElement = updateObjects(this.state.accountData[id],{
            checked:val ,
            value: e.target.value,
            valid: e.target.value!=='' || val,
        });
        //console.log("updated Element ==>",updatedFormElement,id)
        const updatedAccountForm = updateObjects(this.state.accountData,{
            [id]: updatedFormElement
        });

        console.log("Updated AccountForm ==>",{...updatedAccountForm})
        let formIsValid = true;

        for (let ele in updatedAccountForm) {
        
            formIsValid = updatedAccountForm[ele].valid && formIsValid;
            if(updatedAccountForm['checkbox'].valid || updatedAccountForm['checkbox1'].valid){
                //console.log("checkbox is valid!",formIsValid=true);
                formIsValid = e.target.checked ;
            }
            else{
                //console.log("checkbox is valid!",formIsValid=true);
                formIsValid = false;
            }
            
        }
        await this.setState({accountData:updatedAccountForm, isValidForm: formIsValid,disabled: false});
        //console.log("Updated Account info",this.state,this.state.isValidForm);
    }
    
    render(){
        return (
            <div>
                <form onSubmit = {(e)=>this.handleSubmit(e)}>
                    <div className = {classes.AccountInfoLabel}>AccountInformation</div>
                    <table className = {classes.Formlabels}>
                        <tr>
                            <td>
                                <label className = {classes.Label}>Name</label>
                            </td>
                            <td><input onChange = {(e)=>this.handleCheckbox(e,e.target.name)} 
                            name = "name"
                            className = {classes.Forminput} placeholder = "Name"/></td>
                            <td><label className = {classes.Label}>Zip code</label></td>
                            <td><input onChange = {(e)=>this.handleCheckbox(e,e.target.name)} 
                            name = "zipcode"
                            className = {classes.Forminput} placeholder = "Zip Code"/></td>
                            <td><label className = {classes.Label}>Account Number</label></td>
                            <td><input onChange = {(e)=>this.handleCheckbox(e,e.target.name)} 
                            name = "accountNumber"
                            className = {classes.Forminput} placeholder = "Account Number"/></td>
                        </tr>
                        <tr>
                            <td>
                                <label className = {classes.Label}>Date</label>
                            </td>
                            <td><input onChange = {(e)=>this.handleCheckbox(e,e.target.name)} 
                            name = "date"
                            type = "date" className = {classes.Forminput} placeholder = "Name"/></td>
                            <td><label className = {classes.Label}>client</label></td>
                            <td><input onChange = {(e)=>this.handleCheckbox(e,e.target.name)} 
                            name = "client"
                            type = "text"className = {classes.Forminput} placeholder = "Client"/></td>
                        </tr>                    
                    </table>
                    <div className = {classes.grid_wrapper}>
                        <div className = {classes.AccountInfoLabel}>AccountInformation</div>
                        <div>                       
                            <div className = {classes.grid_coloums}>
                                <div></div>
                                <div className = {classes.grid_coloums_switch}>
                                    <div className = {classes.Switch}>COMPLAINTS</div>
                                    <div className = {classes.Switch}>LAWS</div>
                                    <div className = {classes.Switch}>COUNTER</div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input 
                        type = "checkbox" name = "checkbox" value = "checkbox"
                        checked = {this.state.accountData.checkbox.checked}
                        onChange = {(e)=>this.handleCheckbox(e,e.target.name)} /><label>checkbox one</label>
                        <input type = "checkbox"
                         checked = {this.state.accountData.checkbox1.checked}
                         name = "checkbox1" value = "checkbox1" 
                         onChange = {(e)=>this.handleCheckbox(e,e.target.name)} /><label>checkbox one</label>
                        <p><a href = "https://www.google.com" >Notify Me</a></p>
                    </div>
                    <button        
                    disabled = { !this.state.isValidForm}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AccountInfo
