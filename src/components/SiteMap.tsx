import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';


export default function SiteMap() {

  const [data] = useState([
    {
        label: 'My name is kubota daichi (rat). I am researching AI at a university in Japan. I\'m also interested in various other things like programming, design, and gadgets. Nice to meet you!',
        className: 'font-mono w-1/3',
        expanded: true,
        children: [
            {
                label: 'AboutMe',
                className: 'font-mono',
                expanded: true,
                children: [
                    {
                        label: 'Argentina'
                    },
                    {
                        label: 'Croatia'
                    },
                    {
                      label: 'Croatia'
                    }
                ]
            },
            {
                label: 'Contetnt',
                expanded: true,
                children: [
                    {
                        label: 'France'
                    },
                    {
                        label: 'Morocco'
                    }
                ]
            }
        ]
    }
]);

  return (
    <div className="card overflow-auto font-mono">
      <OrganizationChart value={data} />
    </div>
  )
}