import React, { useState, useEffect } from "react";

const modelForm = {

    id:"",
    albumId:"",
    title:"",
    url:"",
    thumbnailUrl:""

};

const AddAlbum = ({ onCreate, onDelete, dataToAccess, setDataToAccess }) => {

    const [form, setForm] = useState(modelForm);

    useEffect(() => {
        if (dataToAccess) {
          setForm(dataToAccess);
        } else {
          setForm(modelForm);
        }
      }, [dataToAccess]);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!form.albumId || !form.title || !form.url || !form.thumbnailUrl ){
            alert('Datos incompletos');
            return;
        }

        onCreate(form);
        onReset();

    }

    const onReset = (e) => {
        setForm(modelForm);
        setDataToAccess(null);
    }

    return <div>

<div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Agregar Album</h3>
              </div><br></br>
              
              <form onSubmit={onSubmit}>
                <br></br>
            <div className="row">
                <div className='col-md-6'>
                    <label className='label'>Album Id</label>
                    <input type="text" name="albumId" placeholder="Album Id" className="form-control" onChange={onChange} value={form.albumId} />
                </div>

                <div className='col-md-6'>
                <label className='label'>Title</label>
                    <input type="text" name="title" placeholder="title" className="form-control" onChange={onChange} value={form.title} />
                </div>
            </div>

            <div className="row">
                <div className='col-md-6'>
                    <label className='label'>Url</label>
                    <input type="text" name="url" placeholder="url" className="form-control" onChange={onChange} value={form.url} />
                </div>

                <div className='col-md-6'>
                <label className='label'>ThumbnailUrl</label>
                    <input type="text" name="thumbnailUrl" placeholder="thumbnailUrl" className="form-control" onChange={onChange} value={form.thumbnailUrl} />
                </div>
            </div><br></br>

            <div className="row">
                <div className='col-md-12' align="center">
                    <button type="button" className="btn btn-danger" onClick={onReset}>Cancelar</button>&nbsp;
                    <input type="submit" className="btn btn-success" value="Enviar" />
                </div>

            </div>
            
        </form>

              
            </div><br></br>

            <br></br></div>;
};

export default AddAlbum;