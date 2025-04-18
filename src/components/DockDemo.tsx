import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';
import './DockDemo.css';


export default function DockDemo() {
    const [position, setPosition] = useState('bottom');
    
    const [displayGitHub, setDisplayGitHub] = useState(false);

    const items = [
        {
            label: 'Finder',
            icon: () => <img className='drop-shadow-sm ' alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img className='drop-shadow-sm ' alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img className='drop-shadow-sm ' alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: "GitHub",
            icon: () => <img className='drop-shadow-sm ' alt="GitHub" src="/public/github-mark-white.svg" width="100%" />,
            command : () => {
                // setDisplayGitHub(true);
                window.open("https://github.com/kubotadaichi" , "_blank");
            }
        },
        {
            label: "Terminal",
            icon: () => <img className='drop-shadow-sm ' alt="Terminal" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img className='drop-shadow-sm ' alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            {/* <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div> */}
            <div className="dock-window">
                <Dock model={items} position="bottom" />
                <Dialog visible={displayGitHub} onHide={() => setDisplayGitHub(false)} header="GitHub">
                    <p>github</p>
                </Dialog>

            </div>
        </div>
    )
}