import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERNAME', {schema: 'dbo' } )
export class T_PRINTERNAME {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'prn_printerid_c',
        })
    public prn_printerid_c: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'prn_descriptionfra_c',
        })
    public prn_descriptionfra_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'prn_descriptionned_c',
        })
    public prn_descriptionned_c: string | null;

}
