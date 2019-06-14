import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RF_PRINTER', {schema: 'dbo' } )
export class T_RF_PRINTER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'RFP_PRINTERID_C',
        })
    public RFP_PRINTERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'RFP_COMMENT_C',
        })
    public RFP_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'RFP_TYPE_C',
        })
    public RFP_TYPE_C: string | null;

}
