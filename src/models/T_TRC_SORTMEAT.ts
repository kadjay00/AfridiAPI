import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_SORTMEAT', {schema: 'dbo' } )
export class T_TRC_SORTMEAT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TSM_MEATTYPEID_N',
        })
    public TSM_MEATTYPEID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TSM_LABELLANG_C',
        })
    public TSM_LABELLANG_C: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'TSM_MEATDESC_C',
        })
    public TSM_MEATDESC_C: string;

    @Column('char', {
        nullable: false,
        name: 'TSM_DELCODE_C',
        })
    public TSM_DELCODE_C: string;

}
