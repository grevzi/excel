import {$} from '@core/dom';

export function resizeHandler($root, resizer) {
    const $resizer = $(resizer)
    const type = $resizer.data.resize
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const sideProp = type === 'col' ? 'bottom' : 'right'
    let size

    $resizer.css({
        opacity: 1,
        [sideProp]: '-5000px'
    })


    document.onmousemove = e => {
        if (type === 'col') {
            const delta = Math.floor(e.pageX - coords.right)
            size = coords.width + delta
            $resizer.css({right: -delta + 'px'})
        } else {
            const delta = Math.floor(e.pageY - coords.bottom)
            size = coords.height + delta
            $resizer.css({bottom: -delta + 'px'})
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        if (type === 'col') {
            $parent.css({width: size + 'px'})
            $root.findAll(`[data-${type}="${$parent.data[type]}"]`)
                .forEach(el => el.style.width = size + 'px')
        } else {
            $parent.css({height: size + 'px'})
        }

        $resizer.css({opacity: 0, right: 0, bottom: 0})
    }
}