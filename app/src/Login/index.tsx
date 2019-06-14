import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { Tooltip, Button, Intent, InputGroup, FormGroup, Icon, Card, Elevation, Toast, Toaster, Position } from '@blueprintjs/core';

const toast = Toaster.create({ 
    position: Position.TOP,
});


const LockButton: React.FC< { showPassword: boolean, setShowPassword: (bool: boolean) => void } > = ({ showPassword, setShowPassword }) => {
    return (
        <>
            <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`} >
                <Button
                    icon={showPassword ? "unlock" : "lock"}
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={() => setShowPassword(!showPassword)}
                />
            </Tooltip>
        </>
    )
};

const Login: React.FC<RouteComponentProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [ credentials, setCredentials ] = useState({ email: '', password: ''});
    
    const logIn = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/auth/login', credentials).then(({ data: { token, id } }) => {
            localStorage.setItem('token', `Bearer ${token}`);
            localStorage.setItem('id', id);
            toast.show({ 
                message: 'Successfully logged in!',
                timeout: 2000,
                intent: Intent.SUCCESS,
            });
            props.history.push('/timelogs');
            
        }).catch((error) => {
            console.log(error);
            toast.show({ 
                message: 'Oops something went wrong!',
                timeout: 2000,
                intent: Intent.DANGER,
            });
        });
    };

    return (
        <Card 
            interactive={true}
            elevation={Elevation.ONE}
            className={'bp3-dark'}
        >
            <FormGroup
                label="Login"
                labelFor="text-input"
                intent={Intent.PRIMARY}
            >
                <InputGroup
                    className={'bp3-dark bp3-primary'}
                    placeholder="Enter your email..."
                    large={true}
                    type={'email'}
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value })}
                />
            </FormGroup>
            <FormGroup intent={Intent.PRIMARY}>
                <InputGroup
                    className={'bp3-dark bp3-primary'}
                    large={true}
                    placeholder="Enter your password..."
                    rightElement={<LockButton showPassword={showPassword} setShowPassword={setShowPassword} />}
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value })}
                />
                </FormGroup>
            <FormGroup 
                intent={Intent.PRIMARY}
                helperText={
                    <>
                        <h3 className="bp3-dark" style={{ display: 'inline'}}>We craft beautiful stuff here at Softup Technologies </h3>
                        <Icon
                            icon={'heart'}
                            iconSize={Icon.SIZE_LARGE}
                            intent={Intent.NONE}
                            style={{ color: '#C22762' }}
                        />
                    </>
                }
                >
                    <Button
                        text='Login'
                        large={true}
                        onClick={logIn}
                    />
            </FormGroup>
        </Card>
    );
}

export default withRouter(Login);