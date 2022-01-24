import React from 'react';
import Navbar from '../../Navbar/Navbar';
import SideNavigation from '../../SideNav/SideNavigation';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class CreateVisitor extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        occupation: '',
        note: '',
        phone:'',
        staffData: '',
        id: null,
        users: []
    };
}
componentDidMount(id){
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };
    axios.get('staff', config).then(
        res => {
            this.setState({
                users:res.data.data,
                // id: res.data.data[0].id,
            })
            // console.log( res.data.data[0].name)
            // console.log(res.data)
        },
        err => {
            // this.setState({isError: true, isLoading: false})
            console.log(err)
        }
   )
} 


handleItemClick =e =>{
    e.preventDefault();

    const formData = new FormData();
        formData.append('full_name', this.state.name)
        formData.append('email',this.state.email);
        formData.append('occupation',this.state.occupation);
        formData.append('phone',this.state.note);
        formData.append('note',this.state.note);
        formData.append('staff_id', this.state.id)
        axios({
            url: 'visitors',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                // 'Content-Type': 'application/json',
            },
            data: formData
        })
        .then(
            res => {
                // const { history } = this.props;
                // history.push("/visitors")
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
}
handleItemChange = e =>{
    this.setState({
          [e.target.name]:e.target.value
        })
  }

  renderSelectRows = e => {
    // return <select>
    //  {this.state.users.map(user => {
    //     return (
    //         <>
    //         <option key={user.id} onChange={() => this.handleSelectClick(user.id)}>{user.name}</option>
    //         </>
    //     ) })}
    // </select>    
 return <div className="card-body">
     <div className="form-group row mb-4">
    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Choose staff</label>
        <div class="col-sm-12 col-md-7">
         <div className="dropdown d-inline mr-2">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Staff Name
        </button>
        <div className="dropdown-menu">
        {this.state.users.map(user => {
            return (
                <p style={{color: "black"}} className="dropdown-item" name="id" onClick={() => this.handleSelectClick(user.id)}>{user.name}</p>
        //         <option key={user.id} onChange={() => this.handleSelectClick(user.id)}>{user.name}</option>
            
        

        //   <a className="dropdown-item" href="#">Action</a>
        //   <a className="dropdown-item" href="#">Another action</a>
        //   <a className="dropdown-item" href="#">Something else here</a>
            )})}
        </div>
  </div>
                                    <div class="invalid-feedback">
                                        Please fill in the Note
                                    </div>
                                    </div>
                                    </div>

</div>

  }
  handleSelectClick = (id) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };
   axios.get(`staff/${id}`, config).then(
        res => {
            this.setState({
                id:res.data.data.id
            })
            // console.log(res.data.data.id)
        },
        err => {
        }
   )
  }
    render() {
        const {user} = this.state;
        return (
            <div>
                <div id="app">
                    <div className="main-wrapper main-wrapper-1">
                        <SideNavigation/>
                        <Navbar/>
                        <div class="main-content">
                        <section className="section">
                        <div className="section-header">
                            <div className="section-header-back">
                            <a href="posts.html" className="btn btn-icon"><i className="fas fa-arrow-left" /></a>
                            </div>
                            <h1>Create New Visitor</h1>
                            <div className="section-header-breadcrumb">
                            <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                            <div className="breadcrumb-item"><a href="#">Posts</a></div>
                            <div className="breadcrumb-item">Create New Visitor</div>
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h4>Write Your Post</h4>
                                </div>
                                <div className="card-body">
                                <form className="needs-validation" onSubmit={this.handleItemClick} noValidate>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">FullName</label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" name="name" onChange={this.handleItemChange}/>
                                        <div class="invalid-feedback">
                                            Please fill in the name
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Email</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="email" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the email
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Occupation</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="occupation" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the Occupation
                                    </div>
                                    </div>
                                    </div>
                                    {/* <div class="form-group row mb-4">
                                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                                        <div class="col-sm-12 col-md-7">
                                            <textarea class="summernote-simple" name="note" onChange={this.handleItemChange}></textarea>
                                        </div>
                                        <div class="invalid-feedback">
                                            Please fill in the Note
                                    </div>
                                    </div> */}
                                    
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Phone</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="tel" className="form-control" name="phone" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in phone number
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Note</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="note" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the Note
                                    </div>
                                    </div>
                                    </div>
                                    <div className="selectBox">
            
                                        {this.renderSelectRows()}
                                        
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                                    <div className="col-sm-12 col-md-7">
                                        <button className="btn btn-primary">Create Visitor</button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
export default withRouter(CreateVisitor);