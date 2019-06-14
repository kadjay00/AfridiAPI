import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_DISPLAY_PDT', {schema: 'dbo' } )
export class T_RECEPTION_DISPLAY_PDT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RDP_REPRISE_N',
        })
    public RDP_REPRISE_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RDP_SHIPPINGNOTE_N',
        })
    public RDP_SHIPPINGNOTE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RDP_DISPLAY_N',
        })
    public RDP_DISPLAY_N: number;

    @Column('char', {
        nullable: false,
        name: 'RDP_TREATED_C',
        })
    public RDP_TREATED_C: string;

}
