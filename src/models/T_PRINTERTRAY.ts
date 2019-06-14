import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERTRAY', {schema: 'dbo' } )
export class T_PRINTERTRAY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'PRT_PRINTERID_C',
        })
    public PRT_PRINTERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'PRT_TRAYID_C',
        })
    public PRT_TRAYID_C: string;

    @Column('char', {
        nullable: true,
        name: 'PRT_MANDATORY_C',
        })
    public PRT_MANDATORY_C: string | null;

}
